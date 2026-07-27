import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiara-create-account');
}

export default function HighrateTibiaraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiara-create-account" />;
}
