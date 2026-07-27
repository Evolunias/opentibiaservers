import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-imperianic-create-account');
}

export default function OfficialImperianicCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-imperianic-create-account" />;
}
