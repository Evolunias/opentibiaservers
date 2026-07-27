import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-evolunia-client');
}

export default function HighrateEvoluniaClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-evolunia-client" />;
}
