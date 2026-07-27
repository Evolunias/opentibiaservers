import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-calmera-ot-wiki');
}

export default function CustomCalmeraOtWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-calmera-ot-wiki" />;
}
