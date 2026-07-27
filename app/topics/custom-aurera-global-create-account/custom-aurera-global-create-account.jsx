import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-aurera-global-create-account');
}

export default function CustomAureraGlobalCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-aurera-global-create-account" />;
}
