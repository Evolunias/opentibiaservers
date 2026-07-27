import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-luminera-create-account');
}

export default function NoResetLumineraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-luminera-create-account" />;
}
