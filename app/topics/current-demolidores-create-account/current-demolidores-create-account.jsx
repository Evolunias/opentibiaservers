import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-demolidores-create-account');
}

export default function CurrentDemolidoresCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-demolidores-create-account" />;
}
