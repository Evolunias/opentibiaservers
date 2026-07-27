import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-demolidores-create-account');
}

export default function BestDemolidoresCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-demolidores-create-account" />;
}
