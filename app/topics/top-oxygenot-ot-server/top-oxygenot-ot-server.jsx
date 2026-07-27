import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-oxygenot-ot-server');
}

export default function TopOxygenotOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-oxygenot-ot-server" />;
}
