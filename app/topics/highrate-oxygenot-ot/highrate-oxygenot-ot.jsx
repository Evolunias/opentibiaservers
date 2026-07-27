import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-oxygenot-ot');
}

export default function HighrateOxygenotOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-oxygenot-ot" />;
}
