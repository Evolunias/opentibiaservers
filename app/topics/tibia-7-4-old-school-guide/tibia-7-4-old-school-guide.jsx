import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-old-school-guide');
}

export default function Tibia74OldSchoolGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-old-school-guide" />;
}
