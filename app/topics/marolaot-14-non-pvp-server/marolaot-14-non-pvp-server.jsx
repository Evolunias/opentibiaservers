import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-14-non-pvp-server');
}

export default function Marolaot14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-14-non-pvp-server" />;
}
