import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-noxiousot-guide');
}

export default function HighrateNoxiousotGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-noxiousot-guide" />;
}
