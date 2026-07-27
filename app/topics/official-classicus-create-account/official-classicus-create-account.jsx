import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-classicus-create-account');
}

export default function OfficialClassicusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-classicus-create-account" />;
}
