import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-demolidores-create-account');
}

export default function OfficialDemolidoresCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-demolidores-create-account" />;
}
