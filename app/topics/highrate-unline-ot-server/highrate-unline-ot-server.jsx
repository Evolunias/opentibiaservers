import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-unline-ot-server');
}

export default function HighrateUnlineOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-unline-ot-server" />;
}
