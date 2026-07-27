import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-classicus-create-account');
}

export default function FreshStartClassicusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-classicus-create-account" />;
}
