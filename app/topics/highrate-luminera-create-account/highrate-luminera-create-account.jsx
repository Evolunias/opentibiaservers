import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-luminera-create-account');
}

export default function HighrateLumineraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-luminera-create-account" />;
}
