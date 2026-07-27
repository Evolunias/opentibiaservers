import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-oxygenot-ot-server');
}

export default function CurrentOxygenotOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-oxygenot-ot-server" />;
}
