import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-custom-map-servers-usa');
}

export default function OriginaltibiaCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-custom-map-servers-usa" />;
}
