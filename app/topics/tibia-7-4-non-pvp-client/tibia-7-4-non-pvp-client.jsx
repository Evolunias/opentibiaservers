import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-non-pvp-client');
}

export default function Tibia74NonPvpClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-non-pvp-client" />;
}
