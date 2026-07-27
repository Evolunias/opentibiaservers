import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-custom-map-servers-sweden');
}

export default function NoxiousotCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-custom-map-servers-sweden" />;
}
