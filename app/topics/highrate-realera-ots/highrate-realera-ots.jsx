import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-realera-ots');
}

export default function HighrateRealeraOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-realera-ots" />;
}
