import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-classick-drakoria-ot-server');
}

export default function LowrateClassickDrakoriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-classick-drakoria-ot-server" />;
}
