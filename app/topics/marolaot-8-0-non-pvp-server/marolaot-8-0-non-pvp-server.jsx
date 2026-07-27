import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-8-0-non-pvp-server');
}

export default function Marolaot80NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-8-0-non-pvp-server" />;
}
