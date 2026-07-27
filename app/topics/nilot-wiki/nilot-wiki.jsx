import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-wiki');
}

export default function NilotWikiKeywordPage() {
  return <StaticKeywordPage slug="nilot-wiki" />;
}
