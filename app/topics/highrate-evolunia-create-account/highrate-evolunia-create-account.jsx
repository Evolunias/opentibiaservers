import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-evolunia-create-account');
}

export default function HighrateEvoluniaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-evolunia-create-account" />;
}
