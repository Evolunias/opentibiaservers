import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-14-non-pvp-server');
}

export default function Arcaniarl14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-14-non-pvp-server" />;
}
