import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-calmera-ot-tibia');
}

export default function HighrateCalmeraOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-calmera-ot-tibia" />;
}
