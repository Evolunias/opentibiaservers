import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibianus-wiki');
}

export default function FreshStartTibianusWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibianus-wiki" />;
}
