import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-old-school-status');
}

export default function Tibia13OldSchoolStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-old-school-status" />;
}
