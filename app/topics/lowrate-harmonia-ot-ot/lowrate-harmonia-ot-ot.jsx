import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-harmonia-ot-ot');
}

export default function LowrateHarmoniaOtOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-harmonia-ot-ot" />;
}
