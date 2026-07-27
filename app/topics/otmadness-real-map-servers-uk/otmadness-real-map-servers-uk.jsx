import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-real-map-servers-uk');
}

export default function OtmadnessRealMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="otmadness-real-map-servers-uk" />;
}
