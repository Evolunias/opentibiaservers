import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-pvp-client');
}

export default function Tibia11PvpClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-pvp-client" />;
}
