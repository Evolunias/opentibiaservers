import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-10-0-non-pvp-server');
}

export default function Marolaot100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-10-0-non-pvp-server" />;
}
