import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-alternatives');
}

export default function ClassickDrakoriaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-alternatives" />;
}
