import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-demolidores-create-account');
}

export default function LowrateDemolidoresCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-demolidores-create-account" />;
}
