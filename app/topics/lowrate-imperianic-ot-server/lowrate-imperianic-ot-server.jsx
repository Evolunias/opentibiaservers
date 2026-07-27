import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-imperianic-ot-server');
}

export default function LowrateImperianicOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-imperianic-ot-server" />;
}
