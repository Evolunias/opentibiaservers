import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-fresh-start-guide');
}

export default function Tibia11FreshStartGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-fresh-start-guide" />;
}
