import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-custom-map-server');
}

export default function Tibia80CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-custom-map-server" />;
}
