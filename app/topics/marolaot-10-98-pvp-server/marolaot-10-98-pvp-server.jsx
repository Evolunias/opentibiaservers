import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-10-98-pvp-server');
}

export default function Marolaot1098PvpServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-10-98-pvp-server" />;
}
