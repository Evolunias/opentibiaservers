import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-mist-of-death-create-account');
}

export default function BestMistOfDeathCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-mist-of-death-create-account" />;
}
