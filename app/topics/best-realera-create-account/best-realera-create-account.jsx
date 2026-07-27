import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-realera-create-account');
}

export default function BestRealeraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-realera-create-account" />;
}
