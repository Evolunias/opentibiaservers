import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-wiki');
}

export default function RangerSArcaniWikiKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-wiki" />;
}
