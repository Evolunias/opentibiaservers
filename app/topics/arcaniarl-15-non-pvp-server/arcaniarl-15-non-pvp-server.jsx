import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-15-non-pvp-server');
}

export default function Arcaniarl15NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-15-non-pvp-server" />;
}
