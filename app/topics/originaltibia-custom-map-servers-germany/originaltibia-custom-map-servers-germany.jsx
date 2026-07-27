import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-custom-map-servers-germany');
}

export default function OriginaltibiaCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-custom-map-servers-germany" />;
}
