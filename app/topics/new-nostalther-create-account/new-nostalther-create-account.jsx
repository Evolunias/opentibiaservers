import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nostalther-create-account');
}

export default function NewNostaltherCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-nostalther-create-account" />;
}
