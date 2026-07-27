import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-11-non-pvp-server');
}

export default function Marolaot11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-11-non-pvp-server" />;
}
