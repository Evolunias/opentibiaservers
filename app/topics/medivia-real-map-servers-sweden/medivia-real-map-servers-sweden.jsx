import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-real-map-servers-sweden');
}

export default function MediviaRealMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="medivia-real-map-servers-sweden" />;
}
