import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-9-6-pvp-server');
}

export default function Arcaniarl96PvpServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-9-6-pvp-server" />;
}
