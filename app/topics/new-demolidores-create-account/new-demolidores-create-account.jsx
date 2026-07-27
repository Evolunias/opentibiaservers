import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-demolidores-create-account');
}

export default function NewDemolidoresCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-demolidores-create-account" />;
}
