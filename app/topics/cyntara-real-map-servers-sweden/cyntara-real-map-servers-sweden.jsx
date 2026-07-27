import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-real-map-servers-sweden');
}

export default function CyntaraRealMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="cyntara-real-map-servers-sweden" />;
}
