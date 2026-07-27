import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-blazera-create-account');
}

export default function PopularBlazeraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-blazera-create-account" />;
}
