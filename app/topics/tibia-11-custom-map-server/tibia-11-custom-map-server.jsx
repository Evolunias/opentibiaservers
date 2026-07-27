import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-custom-map-server');
}

export default function Tibia11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-custom-map-server" />;
}
