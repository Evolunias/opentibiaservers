import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-custom-map-servers-sweden');
}

export default function DuraOnlineCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="dura-online-custom-map-servers-sweden" />;
}
