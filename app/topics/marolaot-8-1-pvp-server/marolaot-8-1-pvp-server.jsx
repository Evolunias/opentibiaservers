import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-8-1-pvp-server');
}

export default function Marolaot81PvpServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-8-1-pvp-server" />;
}
