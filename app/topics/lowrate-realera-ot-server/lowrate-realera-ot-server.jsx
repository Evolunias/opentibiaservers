import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-realera-ot-server');
}

export default function LowrateRealeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-realera-ot-server" />;
}
