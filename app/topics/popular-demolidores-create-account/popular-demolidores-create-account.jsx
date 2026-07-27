import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-demolidores-create-account');
}

export default function PopularDemolidoresCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-demolidores-create-account" />;
}
