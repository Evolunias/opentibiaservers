import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-pvp-servers');
}

export default function Tibia14PvpServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-pvp-servers" />;
}
