import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-custom-map-servers-sweden');
}

export default function RealestaCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="realesta-custom-map-servers-sweden" />;
}
