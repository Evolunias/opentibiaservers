import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-old-school-status');
}

export default function Tibia80OldSchoolStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-old-school-status" />;
}
