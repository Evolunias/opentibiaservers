import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-eldera-create-account');
}

export default function PopularElderaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-eldera-create-account" />;
}
