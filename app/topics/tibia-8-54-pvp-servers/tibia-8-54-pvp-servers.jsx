import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-pvp-servers');
}

export default function Tibia854PvpServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-pvp-servers" />;
}
