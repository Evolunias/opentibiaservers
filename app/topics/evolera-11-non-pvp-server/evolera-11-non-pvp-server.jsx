import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-11-non-pvp-server');
}

export default function Evolera11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-11-non-pvp-server" />;
}
