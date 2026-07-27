import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-real-map-servers-sweden');
}

export default function HarmoniaOtRealMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-real-map-servers-sweden" />;
}
