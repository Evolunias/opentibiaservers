import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-harmonia-ot-ot-server');
}

export default function LowrateHarmoniaOtOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-harmonia-ot-ot-server" />;
}
