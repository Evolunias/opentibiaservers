import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-otmadness-ot-server');
}

export default function PopularOtmadnessOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-otmadness-ot-server" />;
}
