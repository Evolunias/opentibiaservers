import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-midhem-create-account');
}

export default function LowrateMidhemCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-midhem-create-account" />;
}
