import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-real-map-servers-sweden');
}

export default function OtmadnessRealMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="otmadness-real-map-servers-sweden" />;
}
