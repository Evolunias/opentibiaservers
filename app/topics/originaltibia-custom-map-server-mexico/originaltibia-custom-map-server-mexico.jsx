import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-custom-map-server-mexico');
}

export default function OriginaltibiaCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-custom-map-server-mexico" />;
}
