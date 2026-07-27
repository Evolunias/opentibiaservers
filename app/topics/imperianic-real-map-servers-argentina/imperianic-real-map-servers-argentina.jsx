import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-real-map-servers-argentina');
}

export default function ImperianicRealMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-real-map-servers-argentina" />;
}
