import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiascape-create-account');
}

export default function HighrateTibiascapeCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiascape-create-account" />;
}
