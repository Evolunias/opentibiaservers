import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-7-72-custom-map-server');
}

export default function Tibiara772CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-7-72-custom-map-server" />;
}
