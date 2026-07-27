import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-aurera-global-client');
}

export default function HighrateAureraGlobalClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-aurera-global-client" />;
}
