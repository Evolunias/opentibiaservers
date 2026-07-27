import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-originaltibia-wiki');
}

export default function RealMapOriginaltibiaWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-originaltibia-wiki" />;
}
