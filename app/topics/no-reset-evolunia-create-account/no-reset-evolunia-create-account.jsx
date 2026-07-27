import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-evolunia-create-account');
}

export default function NoResetEvoluniaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-evolunia-create-account" />;
}
