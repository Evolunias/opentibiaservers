import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-custom-map-server-sweden');
}

export default function OriginaltibiaCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-custom-map-server-sweden" />;
}
