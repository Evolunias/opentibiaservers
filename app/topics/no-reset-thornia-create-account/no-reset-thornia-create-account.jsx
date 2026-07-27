import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-thornia-create-account');
}

export default function NoResetThorniaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-thornia-create-account" />;
}
