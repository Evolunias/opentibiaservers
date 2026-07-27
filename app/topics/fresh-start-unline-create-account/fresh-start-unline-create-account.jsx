import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-unline-create-account');
}

export default function FreshStartUnlineCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-unline-create-account" />;
}
