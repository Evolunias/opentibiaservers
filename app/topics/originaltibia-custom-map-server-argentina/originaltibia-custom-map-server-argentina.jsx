import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-custom-map-server-argentina');
}

export default function OriginaltibiaCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-custom-map-server-argentina" />;
}
