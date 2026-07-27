import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-pvp-client');
}

export default function Tibia84PvpClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-pvp-client" />;
}
