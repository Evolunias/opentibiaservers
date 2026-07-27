import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-marolaot-server');
}

export default function PvpMarolaotServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-marolaot-server" />;
}
