import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-real-map-servers-germany');
}

export default function OtmadnessRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="otmadness-real-map-servers-germany" />;
}
