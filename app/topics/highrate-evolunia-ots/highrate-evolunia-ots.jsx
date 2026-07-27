import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-evolunia-ots');
}

export default function HighrateEvoluniaOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-evolunia-ots" />;
}
