import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-oxygenot-ot-server');
}

export default function BestOxygenotOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-oxygenot-ot-server" />;
}
