import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-infernal-ot-wiki');
}

export default function HighrateInfernalOtWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-infernal-ot-wiki" />;
}
