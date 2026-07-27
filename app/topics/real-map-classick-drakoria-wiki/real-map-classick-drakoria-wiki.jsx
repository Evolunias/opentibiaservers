import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-classick-drakoria-wiki');
}

export default function RealMapClassickDrakoriaWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-classick-drakoria-wiki" />;
}
