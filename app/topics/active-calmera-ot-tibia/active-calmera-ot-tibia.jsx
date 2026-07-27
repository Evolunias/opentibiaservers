import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-calmera-ot-tibia');
}

export default function ActiveCalmeraOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-calmera-ot-tibia" />;
}
