import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-zezenia-online-wiki');
}

export default function RealMapZezeniaOnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-zezenia-online-wiki" />;
}
