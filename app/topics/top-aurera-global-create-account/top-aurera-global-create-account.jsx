import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-aurera-global-create-account');
}

export default function TopAureraGlobalCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-aurera-global-create-account" />;
}
