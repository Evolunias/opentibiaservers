import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-custom-map-servers-sweden');
}

export default function MadnessaliveCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-custom-map-servers-sweden" />;
}
