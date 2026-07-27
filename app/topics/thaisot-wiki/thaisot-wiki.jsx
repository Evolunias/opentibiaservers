import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-wiki');
}

export default function ThaisotWikiKeywordPage() {
  return <StaticKeywordPage slug="thaisot-wiki" />;
}
