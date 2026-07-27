import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiantis-create-account');
}

export default function NoResetTibiantisCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiantis-create-account" />;
}
