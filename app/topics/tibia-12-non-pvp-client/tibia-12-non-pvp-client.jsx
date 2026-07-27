import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-non-pvp-client');
}

export default function Tibia12NonPvpClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-non-pvp-client" />;
}
