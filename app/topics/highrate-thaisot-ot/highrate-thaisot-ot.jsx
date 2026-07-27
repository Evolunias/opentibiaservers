import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-thaisot-ot');
}

export default function HighrateThaisotOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-thaisot-ot" />;
}
