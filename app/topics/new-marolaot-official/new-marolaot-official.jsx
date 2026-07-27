import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-marolaot-official');
}

export default function NewMarolaotOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-marolaot-official" />;
}
