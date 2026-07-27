import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-sabrehaven-create-account');
}

export default function PopularSabrehavenCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-sabrehaven-create-account" />;
}
