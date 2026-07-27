import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-unline-wiki');
}

export default function NewUnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="new-unline-wiki" />;
}
