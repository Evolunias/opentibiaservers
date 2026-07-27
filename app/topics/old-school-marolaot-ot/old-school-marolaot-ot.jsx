import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-marolaot-ot');
}

export default function OldSchoolMarolaotOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-marolaot-ot" />;
}
