import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nostalther-create-account');
}

export default function CurrentNostaltherCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-nostalther-create-account" />;
}
