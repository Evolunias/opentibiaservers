import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-13-real-map-servers');
}

export default function Tibiara13RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiara-13-real-map-servers" />;
}
