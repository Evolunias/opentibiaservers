import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-pvp-client');
}

export default function Tibia14PvpClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-pvp-client" />;
}
