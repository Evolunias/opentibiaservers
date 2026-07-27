import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-realesta-create-account');
}

export default function NewRealestaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-realesta-create-account" />;
}
