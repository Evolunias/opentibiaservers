import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-calmera-ot-open-tibia');
}

export default function HighrateCalmeraOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-calmera-ot-open-tibia" />;
}
