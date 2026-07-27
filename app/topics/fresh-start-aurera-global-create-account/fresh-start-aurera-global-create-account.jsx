import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-aurera-global-create-account');
}

export default function FreshStartAureraGlobalCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-aurera-global-create-account" />;
}
