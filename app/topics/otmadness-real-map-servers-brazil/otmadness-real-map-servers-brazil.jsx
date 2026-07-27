import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-real-map-servers-brazil');
}

export default function OtmadnessRealMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="otmadness-real-map-servers-brazil" />;
}
