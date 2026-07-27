import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibianus-wiki');
}

export default function LowrateTibianusWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibianus-wiki" />;
}
