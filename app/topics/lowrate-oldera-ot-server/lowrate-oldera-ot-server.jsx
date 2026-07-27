import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-oldera-ot-server');
}

export default function LowrateOlderaOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-oldera-ot-server" />;
}
