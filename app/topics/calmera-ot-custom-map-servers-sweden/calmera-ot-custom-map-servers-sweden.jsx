import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-custom-map-servers-sweden');
}

export default function CalmeraOtCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-custom-map-servers-sweden" />;
}
