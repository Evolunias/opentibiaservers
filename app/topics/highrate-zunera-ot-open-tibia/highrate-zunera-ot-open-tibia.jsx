import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-zunera-ot-open-tibia');
}

export default function HighrateZuneraOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-zunera-ot-open-tibia" />;
}
