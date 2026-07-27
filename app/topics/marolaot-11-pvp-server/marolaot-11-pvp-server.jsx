import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-11-pvp-server');
}

export default function Marolaot11PvpServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-11-pvp-server" />;
}
