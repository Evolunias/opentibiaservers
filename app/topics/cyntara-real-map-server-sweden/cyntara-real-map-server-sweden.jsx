import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-real-map-server-sweden');
}

export default function CyntaraRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="cyntara-real-map-server-sweden" />;
}
