import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-7-72-non-pvp-server');
}

export default function Arcaniarl772NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-7-72-non-pvp-server" />;
}
