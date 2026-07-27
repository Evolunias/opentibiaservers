import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-15-pvp-server');
}

export default function Arcaniarl15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-15-pvp-server" />;
}
