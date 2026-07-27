import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-oxygenot-ot-server');
}

export default function LowrateOxygenotOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-oxygenot-ot-server" />;
}
