import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiara-create-account');
}

export default function CurrentTibiaraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-tibiara-create-account" />;
}
