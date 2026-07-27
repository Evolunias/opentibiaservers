import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-13-pvp-server');
}

export default function Marolaot13PvpServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-13-pvp-server" />;
}
