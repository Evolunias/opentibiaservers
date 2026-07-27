import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-zunera-ot-open-tibia');
}

export default function LowrateZuneraOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-zunera-ot-open-tibia" />;
}
