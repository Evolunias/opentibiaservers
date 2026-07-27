import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-evolera-create-account');
}

export default function FreshStartEvoleraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-evolera-create-account" />;
}
