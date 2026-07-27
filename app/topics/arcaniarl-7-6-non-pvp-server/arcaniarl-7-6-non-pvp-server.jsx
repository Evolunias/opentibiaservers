import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-7-6-non-pvp-server');
}

export default function Arcaniarl76NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-7-6-non-pvp-server" />;
}
