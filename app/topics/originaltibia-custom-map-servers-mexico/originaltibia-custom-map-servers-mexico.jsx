import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-custom-map-servers-mexico');
}

export default function OriginaltibiaCustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-custom-map-servers-mexico" />;
}
