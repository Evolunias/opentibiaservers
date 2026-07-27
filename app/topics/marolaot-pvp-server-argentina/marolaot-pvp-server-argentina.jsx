import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-pvp-server-argentina');
}

export default function MarolaotPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-pvp-server-argentina" />;
}
