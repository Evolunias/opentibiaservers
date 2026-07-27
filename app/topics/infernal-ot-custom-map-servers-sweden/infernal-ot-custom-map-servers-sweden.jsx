import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-custom-map-servers-sweden');
}

export default function InfernalOtCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-custom-map-servers-sweden" />;
}
