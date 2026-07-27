import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-harmonia-ot-ots');
}

export default function LowrateHarmoniaOtOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-harmonia-ot-ots" />;
}
