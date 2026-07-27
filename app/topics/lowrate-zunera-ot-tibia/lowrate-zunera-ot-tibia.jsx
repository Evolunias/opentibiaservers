import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-zunera-ot-tibia');
}

export default function LowrateZuneraOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-zunera-ot-tibia" />;
}
