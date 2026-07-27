import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-thornia-wiki');
}

export default function FreshStartThorniaWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-thornia-wiki" />;
}
