import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-real-map-server-usa');
}

export default function CyntaraRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-real-map-server-usa" />;
}
