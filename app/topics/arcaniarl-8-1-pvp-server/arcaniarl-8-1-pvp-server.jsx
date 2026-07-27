import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-1-pvp-server');
}

export default function Arcaniarl81PvpServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-1-pvp-server" />;
}
