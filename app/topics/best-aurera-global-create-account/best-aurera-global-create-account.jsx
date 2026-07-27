import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-aurera-global-create-account');
}

export default function BestAureraGlobalCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-aurera-global-create-account" />;
}
