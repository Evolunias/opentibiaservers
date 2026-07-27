import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-create-account');
}

export default function TibianusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="tibianus-create-account" />;
}
