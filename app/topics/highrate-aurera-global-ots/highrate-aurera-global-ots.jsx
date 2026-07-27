import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-aurera-global-ots');
}

export default function HighrateAureraGlobalOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-aurera-global-ots" />;
}
