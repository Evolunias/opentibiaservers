import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-imperianic-create-account');
}

export default function PopularImperianicCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-imperianic-create-account" />;
}
