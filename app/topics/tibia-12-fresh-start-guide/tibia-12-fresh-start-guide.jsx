import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-fresh-start-guide');
}

export default function Tibia12FreshStartGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-fresh-start-guide" />;
}
