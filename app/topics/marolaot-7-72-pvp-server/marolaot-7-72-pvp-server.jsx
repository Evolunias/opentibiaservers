import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-7-72-pvp-server');
}

export default function Marolaot772PvpServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-7-72-pvp-server" />;
}
