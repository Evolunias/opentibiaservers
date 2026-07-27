import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-non-pvp-client');
}

export default function Tibia15NonPvpClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-non-pvp-client" />;
}
