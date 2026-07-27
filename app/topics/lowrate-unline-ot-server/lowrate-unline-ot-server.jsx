import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-unline-ot-server');
}

export default function LowrateUnlineOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-unline-ot-server" />;
}
