import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-harmonia-ot-server');
}

export default function LowrateHarmoniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-harmonia-ot-server" />;
}
