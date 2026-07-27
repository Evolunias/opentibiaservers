import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-custom-map-servers-sweden');
}

export default function ArchlightCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="archlight-custom-map-servers-sweden" />;
}
