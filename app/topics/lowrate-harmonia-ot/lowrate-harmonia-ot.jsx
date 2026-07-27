import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-harmonia-ot');
}

export default function LowrateHarmoniaOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-harmonia-ot" />;
}
