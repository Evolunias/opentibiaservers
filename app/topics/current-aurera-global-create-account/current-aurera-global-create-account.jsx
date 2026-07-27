import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-aurera-global-create-account');
}

export default function CurrentAureraGlobalCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-aurera-global-create-account" />;
}
