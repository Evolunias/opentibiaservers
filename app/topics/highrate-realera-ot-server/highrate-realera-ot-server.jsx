import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-realera-ot-server');
}

export default function HighrateRealeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-realera-ot-server" />;
}
