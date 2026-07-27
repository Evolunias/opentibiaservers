import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-oldera-create-account');
}

export default function PopularOlderaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-oldera-create-account" />;
}
