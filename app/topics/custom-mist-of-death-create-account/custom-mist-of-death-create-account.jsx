import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-mist-of-death-create-account');
}

export default function CustomMistOfDeathCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-mist-of-death-create-account" />;
}
