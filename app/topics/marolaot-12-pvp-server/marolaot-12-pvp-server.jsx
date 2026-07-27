import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-12-pvp-server');
}

export default function Marolaot12PvpServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-12-pvp-server" />;
}
