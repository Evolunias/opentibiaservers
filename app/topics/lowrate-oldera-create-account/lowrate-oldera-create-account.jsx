import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-oldera-create-account');
}

export default function LowrateOlderaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-oldera-create-account" />;
}
