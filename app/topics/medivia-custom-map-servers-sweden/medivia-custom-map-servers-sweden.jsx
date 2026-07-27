import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-custom-map-servers-sweden');
}

export default function MediviaCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="medivia-custom-map-servers-sweden" />;
}
