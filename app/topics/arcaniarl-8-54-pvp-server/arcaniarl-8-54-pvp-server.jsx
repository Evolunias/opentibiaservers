import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-54-pvp-server');
}

export default function Arcaniarl854PvpServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-54-pvp-server" />;
}
