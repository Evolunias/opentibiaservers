import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-12-non-pvp-server');
}

export default function Arcaniarl12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-12-non-pvp-server" />;
}
