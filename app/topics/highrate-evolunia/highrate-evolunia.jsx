import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-evolunia');
}

export default function HighrateEvoluniaKeywordPage() {
  return <StaticKeywordPage slug="highrate-evolunia" />;
}
