import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nostalther-create-account');
}

export default function BestNostaltherCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-nostalther-create-account" />;
}
