import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-sabrehaven-create-account');
}

export default function BestSabrehavenCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-sabrehaven-create-account" />;
}
