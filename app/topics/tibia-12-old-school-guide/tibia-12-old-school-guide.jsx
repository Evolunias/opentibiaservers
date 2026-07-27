import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-old-school-guide');
}

export default function Tibia12OldSchoolGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-old-school-guide" />;
}
