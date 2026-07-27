import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-yurots-wiki');
}

export default function NewYurotsWikiKeywordPage() {
  return <StaticKeywordPage slug="new-yurots-wiki" />;
}
