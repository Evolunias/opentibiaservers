import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-pvp-servers');
}

export default function Tibia81PvpServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-pvp-servers" />;
}
