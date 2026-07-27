import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-rubinot');
}

export default function HighrateRubinotKeywordPage() {
  return <StaticKeywordPage slug="highrate-rubinot" />;
}
