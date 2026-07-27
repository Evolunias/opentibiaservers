import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-real-map-servers-sweden');
}

export default function SaintsotRealMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="saintsot-real-map-servers-sweden" />;
}
