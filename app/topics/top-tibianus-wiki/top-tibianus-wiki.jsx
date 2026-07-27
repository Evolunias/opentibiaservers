import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibianus-wiki');
}

export default function TopTibianusWikiKeywordPage() {
  return <StaticKeywordPage slug="top-tibianus-wiki" />;
}
