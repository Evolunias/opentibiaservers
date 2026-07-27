import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-pvp-client');
}

export default function Tibia12PvpClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-pvp-client" />;
}
