import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-calmera-ot-wiki');
}

export default function FreshStartCalmeraOtWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-calmera-ot-wiki" />;
}
