import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-custom-map-servers-sweden');
}

export default function MidhemCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="midhem-custom-map-servers-sweden" />;
}
