import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-otmadness-tibia');
}

export default function PopularOtmadnessTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-otmadness-tibia" />;
}
