import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-pvp-client');
}

export default function Tibia86PvpClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-pvp-client" />;
}
