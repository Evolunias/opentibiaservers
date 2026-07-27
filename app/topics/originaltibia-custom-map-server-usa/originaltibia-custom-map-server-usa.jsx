import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-custom-map-server-usa');
}

export default function OriginaltibiaCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-custom-map-server-usa" />;
}
