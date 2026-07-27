import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-canob-wiki');
}

export default function RealMapCanobWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-canob-wiki" />;
}
