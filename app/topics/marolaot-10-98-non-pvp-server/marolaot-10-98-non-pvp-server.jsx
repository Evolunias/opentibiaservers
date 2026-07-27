import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-10-98-non-pvp-server');
}

export default function Marolaot1098NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-10-98-non-pvp-server" />;
}
