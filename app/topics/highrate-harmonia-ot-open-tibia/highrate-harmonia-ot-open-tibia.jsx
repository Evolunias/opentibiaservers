import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-harmonia-ot-open-tibia');
}

export default function HighrateHarmoniaOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-harmonia-ot-open-tibia" />;
}
