import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-old-school-status');
}

export default function Tibia100OldSchoolStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-old-school-status" />;
}
