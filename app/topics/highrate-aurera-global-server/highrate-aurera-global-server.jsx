import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-aurera-global-server');
}

export default function HighrateAureraGlobalServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-aurera-global-server" />;
}
