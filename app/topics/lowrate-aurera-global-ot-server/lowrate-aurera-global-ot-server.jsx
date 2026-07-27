import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-aurera-global-ot-server');
}

export default function LowrateAureraGlobalOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-aurera-global-ot-server" />;
}
