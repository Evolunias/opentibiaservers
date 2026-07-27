import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-calmera-ot-wiki');
}

export default function ActiveCalmeraOtWikiKeywordPage() {
  return <StaticKeywordPage slug="active-calmera-ot-wiki" />;
}
