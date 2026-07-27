import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-yurots-create-account');
}

export default function CustomYurotsCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-yurots-create-account" />;
}
