import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-custom-map-servers-sweden');
}

export default function OxygenotCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-custom-map-servers-sweden" />;
}
