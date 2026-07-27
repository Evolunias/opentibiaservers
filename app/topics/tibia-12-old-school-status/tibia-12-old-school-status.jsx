import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-old-school-status');
}

export default function Tibia12OldSchoolStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-old-school-status" />;
}
