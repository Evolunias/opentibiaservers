import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-15-pvp-server');
}

export default function Marolaot15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-15-pvp-server" />;
}
