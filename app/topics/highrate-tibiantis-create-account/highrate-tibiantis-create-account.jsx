import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiantis-create-account');
}

export default function HighrateTibiantisCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiantis-create-account" />;
}
