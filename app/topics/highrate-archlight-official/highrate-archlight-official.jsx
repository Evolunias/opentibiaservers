import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-archlight-official');
}

export default function HighrateArchlightOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-archlight-official" />;
}
