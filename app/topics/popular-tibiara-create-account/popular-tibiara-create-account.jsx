import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiara-create-account');
}

export default function PopularTibiaraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiara-create-account" />;
}
