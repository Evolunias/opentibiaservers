import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-oxygenot-server');
}

export default function LowrateOxygenotServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-oxygenot-server" />;
}
