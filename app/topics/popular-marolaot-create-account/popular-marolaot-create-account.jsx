import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-marolaot-create-account');
}

export default function PopularMarolaotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-marolaot-create-account" />;
}
