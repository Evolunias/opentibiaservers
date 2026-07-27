import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-real-map-servers-sweden');
}

export default function MidhemRealMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="midhem-real-map-servers-sweden" />;
}
