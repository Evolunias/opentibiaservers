import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-real-map-servers-usa');
}

export default function CyntaraRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-real-map-servers-usa" />;
}
