import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-real-map-server-argentina');
}

export default function ImperianicRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-real-map-server-argentina" />;
}
