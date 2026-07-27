import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-miracle-wiki');
}

export default function RealMapMiracleWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-miracle-wiki" />;
}
