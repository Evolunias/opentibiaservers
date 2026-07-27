import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-custom-map-open-tibia-server');
}

export default function Tibia80CustomMapOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-custom-map-open-tibia-server" />;
}
