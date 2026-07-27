import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-oxygenot-wiki');
}

export default function NewOxygenotWikiKeywordPage() {
  return <StaticKeywordPage slug="new-oxygenot-wiki" />;
}
