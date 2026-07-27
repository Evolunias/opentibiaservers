import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-create-account');
}

export default function DemolidoresCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="demolidores-create-account" />;
}
