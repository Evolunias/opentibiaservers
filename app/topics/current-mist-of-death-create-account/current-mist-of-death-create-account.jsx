import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-mist-of-death-create-account');
}

export default function CurrentMistOfDeathCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-mist-of-death-create-account" />;
}
