import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-classicus-create-account');
}

export default function PopularClassicusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-classicus-create-account" />;
}
