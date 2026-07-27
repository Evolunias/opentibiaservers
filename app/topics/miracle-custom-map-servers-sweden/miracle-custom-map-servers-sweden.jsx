import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-custom-map-servers-sweden');
}

export default function MiracleCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="miracle-custom-map-servers-sweden" />;
}
