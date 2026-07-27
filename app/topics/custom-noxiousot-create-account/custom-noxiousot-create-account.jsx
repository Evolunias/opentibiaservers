import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-noxiousot-create-account');
}

export default function CustomNoxiousotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-noxiousot-create-account" />;
}
