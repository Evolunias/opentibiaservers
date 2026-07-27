import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-midhem-create-account');
}

export default function CustomMidhemCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-midhem-create-account" />;
}
