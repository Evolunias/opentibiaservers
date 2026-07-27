import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nostalther-create-account');
}

export default function PopularNostaltherCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-nostalther-create-account" />;
}
