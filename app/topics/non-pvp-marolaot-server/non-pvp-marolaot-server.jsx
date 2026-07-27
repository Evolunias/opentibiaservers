import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-marolaot-server');
}

export default function NonPvpMarolaotServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-marolaot-server" />;
}
