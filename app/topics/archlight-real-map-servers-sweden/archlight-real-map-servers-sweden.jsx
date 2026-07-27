import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-real-map-servers-sweden');
}

export default function ArchlightRealMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="archlight-real-map-servers-sweden" />;
}
