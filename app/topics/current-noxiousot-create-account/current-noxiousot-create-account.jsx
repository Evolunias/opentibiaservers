import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-noxiousot-create-account');
}

export default function CurrentNoxiousotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-noxiousot-create-account" />;
}
