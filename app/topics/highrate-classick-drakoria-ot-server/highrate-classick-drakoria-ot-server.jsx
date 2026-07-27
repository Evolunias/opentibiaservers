import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-classick-drakoria-ot-server');
}

export default function HighrateClassickDrakoriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-classick-drakoria-ot-server" />;
}
