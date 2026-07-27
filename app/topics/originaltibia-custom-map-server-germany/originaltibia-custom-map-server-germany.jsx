import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-custom-map-server-germany');
}

export default function OriginaltibiaCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-custom-map-server-germany" />;
}
