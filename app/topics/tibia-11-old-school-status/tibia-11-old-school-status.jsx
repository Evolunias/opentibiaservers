import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-old-school-status');
}

export default function Tibia11OldSchoolStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-old-school-status" />;
}
