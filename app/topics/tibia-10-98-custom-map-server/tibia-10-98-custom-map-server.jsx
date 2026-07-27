import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-custom-map-server');
}

export default function Tibia1098CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-custom-map-server" />;
}
