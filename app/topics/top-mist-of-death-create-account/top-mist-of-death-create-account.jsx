import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-mist-of-death-create-account');
}

export default function TopMistOfDeathCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-mist-of-death-create-account" />;
}
