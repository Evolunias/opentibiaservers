import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-thornia-wiki');
}

export default function TopThorniaWikiKeywordPage() {
  return <StaticKeywordPage slug="top-thornia-wiki" />;
}
