import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-carlinot-ot-server');
}

export default function HighrateCarlinotOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-carlinot-ot-server" />;
}
