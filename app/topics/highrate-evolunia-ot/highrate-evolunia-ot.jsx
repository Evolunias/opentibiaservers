import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-evolunia-ot');
}

export default function HighrateEvoluniaOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-evolunia-ot" />;
}
