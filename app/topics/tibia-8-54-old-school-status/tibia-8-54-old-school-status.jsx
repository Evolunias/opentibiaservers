import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-old-school-status');
}

export default function Tibia854OldSchoolStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-old-school-status" />;
}
