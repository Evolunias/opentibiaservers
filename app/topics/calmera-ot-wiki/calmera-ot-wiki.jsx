import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-wiki');
}

export default function CalmeraOtWikiKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-wiki" />;
}
