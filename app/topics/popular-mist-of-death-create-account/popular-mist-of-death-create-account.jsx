import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-mist-of-death-create-account');
}

export default function PopularMistOfDeathCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-mist-of-death-create-account" />;
}
