import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-pvp-client');
}

export default function Tibia13PvpClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-pvp-client" />;
}
