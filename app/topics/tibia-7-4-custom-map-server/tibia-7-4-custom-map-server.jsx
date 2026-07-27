import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-custom-map-server');
}

export default function Tibia74CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-custom-map-server" />;
}
