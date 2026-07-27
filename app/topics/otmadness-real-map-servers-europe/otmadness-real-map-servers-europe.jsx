import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-real-map-servers-europe');
}

export default function OtmadnessRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="otmadness-real-map-servers-europe" />;
}
