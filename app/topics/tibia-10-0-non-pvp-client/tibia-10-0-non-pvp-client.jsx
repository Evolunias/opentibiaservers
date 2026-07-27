import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-non-pvp-client');
}

export default function Tibia100NonPvpClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-non-pvp-client" />;
}
