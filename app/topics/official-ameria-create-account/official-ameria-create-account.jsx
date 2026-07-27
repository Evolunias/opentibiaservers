import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ameria-create-account');
}

export default function OfficialAmeriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-ameria-create-account" />;
}
