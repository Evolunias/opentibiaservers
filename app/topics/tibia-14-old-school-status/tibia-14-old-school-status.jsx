import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-old-school-status');
}

export default function Tibia14OldSchoolStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-old-school-status" />;
}
