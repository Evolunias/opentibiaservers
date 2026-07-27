import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-blazera-ot-server');
}

export default function HighrateBlazeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-blazera-ot-server" />;
}
