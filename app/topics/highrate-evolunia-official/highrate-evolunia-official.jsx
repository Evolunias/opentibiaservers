import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-evolunia-official');
}

export default function HighrateEvoluniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-evolunia-official" />;
}
