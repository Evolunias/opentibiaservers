import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-realesta-ot-server');
}

export default function HighrateRealestaOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-realesta-ot-server" />;
}
