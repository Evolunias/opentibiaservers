import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-originaltibia-create-account');
}

export default function PopularOriginaltibiaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-originaltibia-create-account" />;
}
