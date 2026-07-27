import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-real-map-server-sweden');
}

export default function OtmadnessRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="otmadness-real-map-server-sweden" />;
}
