import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-72-non-pvp-server');
}

export default function Evolera772NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-72-non-pvp-server" />;
}
