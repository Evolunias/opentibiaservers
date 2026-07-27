import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-demolidores-create-account');
}

export default function FreshStartDemolidoresCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-demolidores-create-account" />;
}
