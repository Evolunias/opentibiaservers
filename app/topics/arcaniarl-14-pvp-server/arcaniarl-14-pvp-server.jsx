import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-14-pvp-server');
}

export default function Arcaniarl14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-14-pvp-server" />;
}
