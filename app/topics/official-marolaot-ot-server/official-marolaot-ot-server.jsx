import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-marolaot-ot-server');
}

export default function OfficialMarolaotOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-marolaot-ot-server" />;
}
