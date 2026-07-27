import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-realesta-ot-server');
}

export default function LowrateRealestaOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-realesta-ot-server" />;
}
