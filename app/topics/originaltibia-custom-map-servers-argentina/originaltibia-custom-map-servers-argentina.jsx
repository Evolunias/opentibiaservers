import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-custom-map-servers-argentina');
}

export default function OriginaltibiaCustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-custom-map-servers-argentina" />;
}
