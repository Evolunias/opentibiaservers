import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-harmonia-ot-tibia');
}

export default function HighrateHarmoniaOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-harmonia-ot-tibia" />;
}
