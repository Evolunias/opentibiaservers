import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-real-map-servers-germany');
}

export default function OriginaltibiaRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-real-map-servers-germany" />;
}
