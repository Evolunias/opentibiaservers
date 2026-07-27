import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-otmadness-server');
}

export default function PopularOtmadnessServerKeywordPage() {
  return <StaticKeywordPage slug="popular-otmadness-server" />;
}
