import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-oldera-ot-server');
}

export default function HighrateOlderaOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-oldera-ot-server" />;
}
