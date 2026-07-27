import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-12-non-pvp-server');
}

export default function Evolera12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-12-non-pvp-server" />;
}
