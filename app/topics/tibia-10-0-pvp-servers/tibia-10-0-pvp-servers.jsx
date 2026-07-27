import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-pvp-servers');
}

export default function Tibia100PvpServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-pvp-servers" />;
}
