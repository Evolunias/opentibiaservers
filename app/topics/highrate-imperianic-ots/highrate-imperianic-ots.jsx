import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-imperianic-ots');
}

export default function HighrateImperianicOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-imperianic-ots" />;
}
