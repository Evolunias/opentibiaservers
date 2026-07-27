import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-aurera-global');
}

export default function HighrateAureraGlobalKeywordPage() {
  return <StaticKeywordPage slug="highrate-aurera-global" />;
}
