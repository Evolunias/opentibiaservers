import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-evolunia-create-account');
}

export default function LowrateEvoluniaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-evolunia-create-account" />;
}
