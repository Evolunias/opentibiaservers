import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-otmadness-ot');
}

export default function PopularOtmadnessOtKeywordPage() {
  return <StaticKeywordPage slug="popular-otmadness-ot" />;
}
