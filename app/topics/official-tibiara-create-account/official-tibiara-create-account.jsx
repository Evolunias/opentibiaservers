import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiara-create-account');
}

export default function OfficialTibiaraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-tibiara-create-account" />;
}
