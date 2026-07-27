import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-calmera-ot-wiki');
}

export default function HighrateCalmeraOtWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-calmera-ot-wiki" />;
}
