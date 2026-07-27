import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ameria-create-account');
}

export default function NoResetAmeriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ameria-create-account" />;
}
