import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nto-star-ot-server');
}

export default function HighrateNtoStarOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-nto-star-ot-server" />;
}
