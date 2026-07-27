import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-unline-ot');
}

export default function HighrateUnlineOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-unline-ot" />;
}
