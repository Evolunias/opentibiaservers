import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-11-pvp-server');
}

export default function Arcaniarl11PvpServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-11-pvp-server" />;
}
