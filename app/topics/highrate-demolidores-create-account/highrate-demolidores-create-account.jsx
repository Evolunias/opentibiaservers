import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-demolidores-create-account');
}

export default function HighrateDemolidoresCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-demolidores-create-account" />;
}
