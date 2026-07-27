import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-noxiousot-create-account');
}

export default function NewNoxiousotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-noxiousot-create-account" />;
}
