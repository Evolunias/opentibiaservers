import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-dura-online-wiki');
}

export default function RealMapDuraOnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-dura-online-wiki" />;
}
