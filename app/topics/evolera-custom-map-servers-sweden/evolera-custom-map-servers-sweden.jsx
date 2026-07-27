import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-custom-map-servers-sweden');
}

export default function EvoleraCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="evolera-custom-map-servers-sweden" />;
}
