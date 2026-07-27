import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-non-pvp-client');
}

export default function Tibia86NonPvpClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-non-pvp-client" />;
}
