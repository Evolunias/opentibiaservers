import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-oxygenot-create-account');
}

export default function PopularOxygenotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-oxygenot-create-account" />;
}
