import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-calmera-ot-tibia');
}

export default function CustomCalmeraOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-calmera-ot-tibia" />;
}
