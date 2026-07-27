import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-pvp-client');
}

export default function Tibia15PvpClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-pvp-client" />;
}
