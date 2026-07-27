import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-demolidores-create-account');
}

export default function NoResetDemolidoresCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-demolidores-create-account" />;
}
