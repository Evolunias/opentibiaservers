import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-imperianic-create-account');
}

export default function CurrentImperianicCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-imperianic-create-account" />;
}
