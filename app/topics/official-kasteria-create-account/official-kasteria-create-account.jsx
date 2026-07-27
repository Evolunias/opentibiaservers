import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-kasteria-create-account');
}

export default function OfficialKasteriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-kasteria-create-account" />;
}
