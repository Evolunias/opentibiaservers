import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-midhem-create-account');
}

export default function FreshStartMidhemCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-midhem-create-account" />;
}
