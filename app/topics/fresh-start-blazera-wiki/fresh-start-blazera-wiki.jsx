import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-blazera-wiki');
}

export default function FreshStartBlazeraWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-blazera-wiki" />;
}
