import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-custom-map-server');
}

export default function Tibia13CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-custom-map-server" />;
}
