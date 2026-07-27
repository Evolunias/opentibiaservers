import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-harmonia-ot-open-tibia');
}

export default function LowrateHarmoniaOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-harmonia-ot-open-tibia" />;
}
