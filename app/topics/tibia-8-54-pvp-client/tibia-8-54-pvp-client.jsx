import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-pvp-client');
}

export default function Tibia854PvpClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-pvp-client" />;
}
