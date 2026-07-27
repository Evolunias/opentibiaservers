import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-7-4-pvp-server');
}

export default function Arcaniarl74PvpServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-7-4-pvp-server" />;
}
