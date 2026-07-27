import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-eternal-odyssey-create-account');
}

export default function PopularEternalOdysseyCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-eternal-odyssey-create-account" />;
}
