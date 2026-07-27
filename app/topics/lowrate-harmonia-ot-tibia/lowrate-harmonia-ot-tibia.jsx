import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-harmonia-ot-tibia');
}

export default function LowrateHarmoniaOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-harmonia-ot-tibia" />;
}
