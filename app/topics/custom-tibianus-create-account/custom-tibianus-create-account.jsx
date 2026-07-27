import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibianus-create-account');
}

export default function CustomTibianusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-tibianus-create-account" />;
}
