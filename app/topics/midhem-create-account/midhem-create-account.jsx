import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-create-account');
}

export default function MidhemCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="midhem-create-account" />;
}
