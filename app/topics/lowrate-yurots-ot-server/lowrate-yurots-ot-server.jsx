import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-yurots-ot-server');
}

export default function LowrateYurotsOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-yurots-ot-server" />;
}
