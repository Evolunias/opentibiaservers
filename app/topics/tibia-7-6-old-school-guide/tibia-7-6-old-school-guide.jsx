import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-old-school-guide');
}

export default function Tibia76OldSchoolGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-old-school-guide" />;
}
