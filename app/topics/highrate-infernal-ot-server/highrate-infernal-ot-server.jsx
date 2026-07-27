import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-infernal-ot-server');
}

export default function HighrateInfernalOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-infernal-ot-server" />;
}
