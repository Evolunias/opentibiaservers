import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-12-custom-map-server');
}

export default function Tibiara12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-12-custom-map-server" />;
}
