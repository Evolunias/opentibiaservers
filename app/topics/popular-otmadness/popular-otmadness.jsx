import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-otmadness');
}

export default function PopularOtmadnessKeywordPage() {
  return <StaticKeywordPage slug="popular-otmadness" />;
}
