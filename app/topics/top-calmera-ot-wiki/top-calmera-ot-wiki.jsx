import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-calmera-ot-wiki');
}

export default function TopCalmeraOtWikiKeywordPage() {
  return <StaticKeywordPage slug="top-calmera-ot-wiki" />;
}
