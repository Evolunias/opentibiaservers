import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-realera-create-account');
}

export default function CurrentRealeraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-realera-create-account" />;
}
