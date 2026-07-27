import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-originaltibia-ot');
}

export default function HighrateOriginaltibiaOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-originaltibia-ot" />;
}
