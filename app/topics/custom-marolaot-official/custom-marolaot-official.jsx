import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-marolaot-official');
}

export default function CustomMarolaotOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-marolaot-official" />;
}
