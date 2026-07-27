import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-evolera-ot-server');
}

export default function HighrateEvoleraOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-evolera-ot-server" />;
}
