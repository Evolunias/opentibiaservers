import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-archlight-login');
}

export default function HighrateArchlightLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-archlight-login" />;
}
