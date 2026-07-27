import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-pvp-client');
}

export default function Tibia772PvpClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-pvp-client" />;
}
