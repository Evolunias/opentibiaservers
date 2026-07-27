import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-aurera-global-login');
}

export default function HighrateAureraGlobalLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-aurera-global-login" />;
}
