import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-midhem-create-account');
}

export default function NewMidhemCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-midhem-create-account" />;
}
