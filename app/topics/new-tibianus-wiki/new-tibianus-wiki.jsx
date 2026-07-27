import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibianus-wiki');
}

export default function NewTibianusWikiKeywordPage() {
  return <StaticKeywordPage slug="new-tibianus-wiki" />;
}
