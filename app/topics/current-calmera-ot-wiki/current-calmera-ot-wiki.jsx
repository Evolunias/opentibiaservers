import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-calmera-ot-wiki');
}

export default function CurrentCalmeraOtWikiKeywordPage() {
  return <StaticKeywordPage slug="current-calmera-ot-wiki" />;
}
