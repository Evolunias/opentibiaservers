import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-pvp-client');
}

export default function Tibia76PvpClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-pvp-client" />;
}
