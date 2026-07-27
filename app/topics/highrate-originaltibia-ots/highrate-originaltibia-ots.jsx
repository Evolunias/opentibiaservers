import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-originaltibia-ots');
}

export default function HighrateOriginaltibiaOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-originaltibia-ots" />;
}
