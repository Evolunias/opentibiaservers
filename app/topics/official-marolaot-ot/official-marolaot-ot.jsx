import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-marolaot-ot');
}

export default function OfficialMarolaotOtKeywordPage() {
  return <StaticKeywordPage slug="official-marolaot-ot" />;
}
