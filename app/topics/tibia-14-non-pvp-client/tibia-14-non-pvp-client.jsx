import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-non-pvp-client');
}

export default function Tibia14NonPvpClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-non-pvp-client" />;
}
