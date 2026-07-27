import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiame-create-account');
}

export default function HighrateTibiameCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiame-create-account" />;
}
