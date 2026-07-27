import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-noxiousot-create-account');
}

export default function TopNoxiousotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-noxiousot-create-account" />;
}
