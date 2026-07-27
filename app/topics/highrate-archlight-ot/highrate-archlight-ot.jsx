import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-archlight-ot');
}

export default function HighrateArchlightOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-archlight-ot" />;
}
