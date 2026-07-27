import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-fresh-start-guide');
}

export default function Tibia84FreshStartGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-fresh-start-guide" />;
}
