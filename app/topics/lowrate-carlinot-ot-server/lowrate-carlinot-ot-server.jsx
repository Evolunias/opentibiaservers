import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-carlinot-ot-server');
}

export default function LowrateCarlinotOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-carlinot-ot-server" />;
}
