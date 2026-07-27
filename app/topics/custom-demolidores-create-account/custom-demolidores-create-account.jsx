import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-demolidores-create-account');
}

export default function CustomDemolidoresCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-demolidores-create-account" />;
}
