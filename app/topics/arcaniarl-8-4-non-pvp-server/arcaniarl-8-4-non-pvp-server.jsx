import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-4-non-pvp-server');
}

export default function Arcaniarl84NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-4-non-pvp-server" />;
}
