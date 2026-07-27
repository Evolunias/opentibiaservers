import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-noxiousot-create-account');
}

export default function OfficialNoxiousotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-noxiousot-create-account" />;
}
