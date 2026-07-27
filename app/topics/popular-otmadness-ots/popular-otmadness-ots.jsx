import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-otmadness-ots');
}

export default function PopularOtmadnessOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-otmadness-ots" />;
}
