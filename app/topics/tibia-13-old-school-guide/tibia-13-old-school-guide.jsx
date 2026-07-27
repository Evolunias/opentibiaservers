import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-old-school-guide');
}

export default function Tibia13OldSchoolGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-old-school-guide" />;
}
