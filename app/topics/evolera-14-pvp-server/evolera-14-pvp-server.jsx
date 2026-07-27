import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-14-pvp-server');
}

export default function Evolera14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-14-pvp-server" />;
}
