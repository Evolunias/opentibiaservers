import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiascape-create-account');
}

export default function NoResetTibiascapeCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiascape-create-account" />;
}
