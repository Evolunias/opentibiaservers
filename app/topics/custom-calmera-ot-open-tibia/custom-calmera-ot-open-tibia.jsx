import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-calmera-ot-open-tibia');
}

export default function CustomCalmeraOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-calmera-ot-open-tibia" />;
}
