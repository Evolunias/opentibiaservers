import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-imperianic-ot-server');
}

export default function HighrateImperianicOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-imperianic-ot-server" />;
}
