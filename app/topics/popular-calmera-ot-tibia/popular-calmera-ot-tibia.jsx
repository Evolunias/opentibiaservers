import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-calmera-ot-tibia');
}

export default function PopularCalmeraOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-calmera-ot-tibia" />;
}
