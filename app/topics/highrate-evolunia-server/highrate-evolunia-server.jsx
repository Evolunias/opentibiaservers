import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-evolunia-server');
}

export default function HighrateEvoluniaServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-evolunia-server" />;
}
