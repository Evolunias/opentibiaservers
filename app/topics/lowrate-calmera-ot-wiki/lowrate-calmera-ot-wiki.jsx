import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-calmera-ot-wiki');
}

export default function LowrateCalmeraOtWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-calmera-ot-wiki" />;
}
