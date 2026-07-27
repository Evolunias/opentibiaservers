import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-xanteria-wiki');
}

export default function TopXanteriaWikiKeywordPage() {
  return <StaticKeywordPage slug="top-xanteria-wiki" />;
}
