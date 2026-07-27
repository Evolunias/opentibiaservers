import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-aurera-global-create-account');
}

export default function OfficialAureraGlobalCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-aurera-global-create-account" />;
}
