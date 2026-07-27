import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-demolidores-create-account');
}

export default function ActiveDemolidoresCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-demolidores-create-account" />;
}
