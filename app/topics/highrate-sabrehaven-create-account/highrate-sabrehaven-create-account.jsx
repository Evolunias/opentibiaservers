import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-sabrehaven-create-account');
}

export default function HighrateSabrehavenCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-sabrehaven-create-account" />;
}
