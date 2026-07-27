import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-harmonia-ot-wiki');
}

export default function HighrateHarmoniaOtWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-harmonia-ot-wiki" />;
}
