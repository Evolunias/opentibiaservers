import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiaorigins-create-account');
}

export default function HighrateTibiaoriginsCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiaorigins-create-account" />;
}
