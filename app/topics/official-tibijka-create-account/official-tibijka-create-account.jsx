import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibijka-create-account');
}

export default function OfficialTibijkaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-tibijka-create-account" />;
}
