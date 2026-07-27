import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-arcaniarl-wiki');
}

export default function RealMapArcaniarlWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-arcaniarl-wiki" />;
}
