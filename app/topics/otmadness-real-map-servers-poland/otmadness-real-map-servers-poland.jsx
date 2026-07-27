import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-real-map-servers-poland');
}

export default function OtmadnessRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="otmadness-real-map-servers-poland" />;
}
