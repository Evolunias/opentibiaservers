import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-aurera-global-create-account');
}

export default function PopularAureraGlobalCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-aurera-global-create-account" />;
}
