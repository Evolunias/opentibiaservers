import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-old-school-status');
}

export default function Tibia76OldSchoolStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-old-school-status" />;
}
