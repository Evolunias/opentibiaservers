import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-otmadness-open-tibia');
}

export default function PopularOtmadnessOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-otmadness-open-tibia" />;
}
