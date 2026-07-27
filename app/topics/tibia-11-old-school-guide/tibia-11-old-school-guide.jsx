import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-old-school-guide');
}

export default function Tibia11OldSchoolGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-old-school-guide" />;
}
