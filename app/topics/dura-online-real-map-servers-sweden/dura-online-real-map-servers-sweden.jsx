import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-real-map-servers-sweden');
}

export default function DuraOnlineRealMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="dura-online-real-map-servers-sweden" />;
}
