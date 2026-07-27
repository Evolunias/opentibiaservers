import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-14-pvp-server');
}

export default function Marolaot14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-14-pvp-server" />;
}
