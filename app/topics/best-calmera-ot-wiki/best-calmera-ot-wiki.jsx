import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-calmera-ot-wiki');
}

export default function BestCalmeraOtWikiKeywordPage() {
  return <StaticKeywordPage slug="best-calmera-ot-wiki" />;
}
