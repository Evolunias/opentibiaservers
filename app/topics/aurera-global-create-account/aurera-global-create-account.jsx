import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-create-account');
}

export default function AureraGlobalCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-create-account" />;
}
