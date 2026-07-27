import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-real-map-servers-latin-america');
}

export default function OtmadnessRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-real-map-servers-latin-america" />;
}
