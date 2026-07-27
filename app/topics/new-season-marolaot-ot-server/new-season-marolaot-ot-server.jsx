import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-marolaot-ot-server');
}

export default function NewSeasonMarolaotOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-marolaot-ot-server" />;
}
