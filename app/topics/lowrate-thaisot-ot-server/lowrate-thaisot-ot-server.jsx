import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-thaisot-ot-server');
}

export default function LowrateThaisotOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-thaisot-ot-server" />;
}
