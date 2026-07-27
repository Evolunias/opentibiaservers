import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-realesta-ots');
}

export default function HighrateRealestaOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-realesta-ots" />;
}
