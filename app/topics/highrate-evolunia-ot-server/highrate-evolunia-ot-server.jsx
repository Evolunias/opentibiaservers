import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-evolunia-ot-server');
}

export default function HighrateEvoluniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-evolunia-ot-server" />;
}
