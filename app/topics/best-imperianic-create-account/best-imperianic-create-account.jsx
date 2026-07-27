import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-imperianic-create-account');
}

export default function BestImperianicCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-imperianic-create-account" />;
}
