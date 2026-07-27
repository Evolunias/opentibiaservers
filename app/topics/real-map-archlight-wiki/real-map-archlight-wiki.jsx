import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-archlight-wiki');
}

export default function RealMapArchlightWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-archlight-wiki" />;
}
