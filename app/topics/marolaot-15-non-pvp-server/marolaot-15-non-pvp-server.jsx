import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-15-non-pvp-server');
}

export default function Marolaot15NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-15-non-pvp-server" />;
}
