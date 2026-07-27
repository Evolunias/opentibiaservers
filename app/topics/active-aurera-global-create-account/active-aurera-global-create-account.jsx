import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-aurera-global-create-account');
}

export default function ActiveAureraGlobalCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-aurera-global-create-account" />;
}
