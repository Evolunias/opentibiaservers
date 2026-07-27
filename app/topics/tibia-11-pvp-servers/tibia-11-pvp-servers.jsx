import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-pvp-servers');
}

export default function Tibia11PvpServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-pvp-servers" />;
}
