import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ameria-ot-server');
}

export default function HighrateAmeriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-ameria-ot-server" />;
}
