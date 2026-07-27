import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-demolidores-create-account');
}

export default function TopDemolidoresCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-demolidores-create-account" />;
}
