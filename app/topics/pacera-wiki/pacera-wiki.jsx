import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pacera-wiki');
}

export default function PaceraWikiKeywordPage() {
  return <StaticKeywordPage slug="pacera-wiki" />;
}
