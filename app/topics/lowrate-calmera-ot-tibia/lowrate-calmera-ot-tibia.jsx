import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-calmera-ot-tibia');
}

export default function LowrateCalmeraOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-calmera-ot-tibia" />;
}
