import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-pvp-servers');
}

export default function Tibia12PvpServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-pvp-servers" />;
}
