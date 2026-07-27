import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-realera-create-account');
}

export default function CustomRealeraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-realera-create-account" />;
}
