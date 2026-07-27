import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-otmadness-official');
}

export default function PopularOtmadnessOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-otmadness-official" />;
}
