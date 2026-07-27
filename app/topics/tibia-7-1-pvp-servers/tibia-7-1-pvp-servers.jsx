import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-pvp-servers');
}

export default function Tibia71PvpServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-pvp-servers" />;
}
