import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-pvp-servers');
}

export default function Tibia772PvpServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-pvp-servers" />;
}
