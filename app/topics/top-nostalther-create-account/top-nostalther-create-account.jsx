import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nostalther-create-account');
}

export default function TopNostaltherCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-nostalther-create-account" />;
}
