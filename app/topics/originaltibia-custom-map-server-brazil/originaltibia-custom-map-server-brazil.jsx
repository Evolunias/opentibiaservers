import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-custom-map-server-brazil');
}

export default function OriginaltibiaCustomMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-custom-map-server-brazil" />;
}
