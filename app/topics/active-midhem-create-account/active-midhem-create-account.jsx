import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-midhem-create-account');
}

export default function ActiveMidhemCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-midhem-create-account" />;
}
