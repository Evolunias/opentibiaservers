import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-oxygenot-ot-server');
}

export default function HighrateOxygenotOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-oxygenot-ot-server" />;
}
