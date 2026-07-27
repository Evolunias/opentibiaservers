import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-calmera-ot-open-tibia');
}

export default function PopularCalmeraOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-calmera-ot-open-tibia" />;
}
