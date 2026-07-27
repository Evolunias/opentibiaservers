import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-12-non-pvp-server');
}

export default function Marolaot12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-12-non-pvp-server" />;
}
