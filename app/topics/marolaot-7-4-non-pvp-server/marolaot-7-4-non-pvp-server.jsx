import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-7-4-non-pvp-server');
}

export default function Marolaot74NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-7-4-non-pvp-server" />;
}
