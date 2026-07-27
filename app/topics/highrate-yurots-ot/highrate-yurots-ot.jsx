import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-yurots-ot');
}

export default function HighrateYurotsOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-yurots-ot" />;
}
