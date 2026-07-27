import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-rubinot-ot');
}

export default function HighrateRubinotOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-rubinot-ot" />;
}
