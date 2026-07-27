import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-thornia-wiki');
}

export default function NewThorniaWikiKeywordPage() {
  return <StaticKeywordPage slug="new-thornia-wiki" />;
}
