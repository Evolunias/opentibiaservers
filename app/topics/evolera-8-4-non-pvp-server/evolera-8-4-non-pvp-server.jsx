import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-4-non-pvp-server');
}

export default function Evolera84NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-4-non-pvp-server" />;
}
