import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-noxiousot-create-account');
}

export default function NoResetNoxiousotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-noxiousot-create-account" />;
}
