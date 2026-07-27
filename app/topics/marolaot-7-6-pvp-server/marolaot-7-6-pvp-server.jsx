import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-7-6-pvp-server');
}

export default function Marolaot76PvpServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-7-6-pvp-server" />;
}
