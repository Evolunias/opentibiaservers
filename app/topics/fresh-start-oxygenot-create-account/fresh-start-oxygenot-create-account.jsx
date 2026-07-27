import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-oxygenot-create-account');
}

export default function FreshStartOxygenotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-oxygenot-create-account" />;
}
