import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-7-1-pvp-server');
}

export default function Marolaot71PvpServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-7-1-pvp-server" />;
}
