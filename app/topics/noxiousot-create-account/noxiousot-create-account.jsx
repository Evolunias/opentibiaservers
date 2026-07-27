import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-create-account');
}

export default function NoxiousotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-create-account" />;
}
