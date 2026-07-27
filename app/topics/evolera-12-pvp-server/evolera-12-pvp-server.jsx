import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-12-pvp-server');
}

export default function Evolera12PvpServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-12-pvp-server" />;
}
