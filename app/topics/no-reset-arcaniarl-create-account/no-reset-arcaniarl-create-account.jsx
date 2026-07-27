import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-arcaniarl-create-account');
}

export default function NoResetArcaniarlCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-arcaniarl-create-account" />;
}
