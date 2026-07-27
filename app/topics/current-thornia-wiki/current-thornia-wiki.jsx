import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-thornia-wiki');
}

export default function CurrentThorniaWikiKeywordPage() {
  return <StaticKeywordPage slug="current-thornia-wiki" />;
}
