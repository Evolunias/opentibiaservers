import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-custom-map-servers-sweden');
}

export default function HarmoniaOtCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-custom-map-servers-sweden" />;
}
