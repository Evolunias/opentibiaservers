import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-noxiousot-wiki');
}

export default function HighrateNoxiousotWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-noxiousot-wiki" />;
}
