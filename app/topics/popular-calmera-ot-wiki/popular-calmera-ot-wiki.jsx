import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-calmera-ot-wiki');
}

export default function PopularCalmeraOtWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-calmera-ot-wiki" />;
}
