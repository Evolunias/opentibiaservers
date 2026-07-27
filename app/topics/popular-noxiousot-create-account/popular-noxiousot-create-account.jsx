import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-noxiousot-create-account');
}

export default function PopularNoxiousotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-noxiousot-create-account" />;
}
