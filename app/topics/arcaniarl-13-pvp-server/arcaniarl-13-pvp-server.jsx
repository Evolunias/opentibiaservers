import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-13-pvp-server');
}

export default function Arcaniarl13PvpServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-13-pvp-server" />;
}
