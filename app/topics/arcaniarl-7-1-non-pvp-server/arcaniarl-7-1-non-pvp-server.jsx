import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-7-1-non-pvp-server');
}

export default function Arcaniarl71NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-7-1-non-pvp-server" />;
}
