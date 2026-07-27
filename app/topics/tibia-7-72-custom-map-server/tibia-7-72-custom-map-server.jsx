import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-custom-map-server');
}

export default function Tibia772CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-custom-map-server" />;
}
