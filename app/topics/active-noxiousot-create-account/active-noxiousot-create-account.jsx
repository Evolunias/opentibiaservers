import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-noxiousot-create-account');
}

export default function ActiveNoxiousotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-noxiousot-create-account" />;
}
