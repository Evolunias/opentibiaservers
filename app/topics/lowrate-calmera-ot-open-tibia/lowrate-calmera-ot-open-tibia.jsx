import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-calmera-ot-open-tibia');
}

export default function LowrateCalmeraOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-calmera-ot-open-tibia" />;
}
