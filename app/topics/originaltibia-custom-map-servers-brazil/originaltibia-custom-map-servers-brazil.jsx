import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-custom-map-servers-brazil');
}

export default function OriginaltibiaCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-custom-map-servers-brazil" />;
}
