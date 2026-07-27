import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-14-real-map-servers');
}

export default function Tibiara14RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiara-14-real-map-servers" />;
}
