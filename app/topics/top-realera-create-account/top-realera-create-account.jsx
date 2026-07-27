import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-realera-create-account');
}

export default function TopRealeraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-realera-create-account" />;
}
