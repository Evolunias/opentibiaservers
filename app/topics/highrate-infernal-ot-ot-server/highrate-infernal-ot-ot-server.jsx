import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-infernal-ot-ot-server');
}

export default function HighrateInfernalOtOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-infernal-ot-ot-server" />;
}
