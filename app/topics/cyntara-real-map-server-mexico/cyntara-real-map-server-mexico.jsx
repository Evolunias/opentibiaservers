import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-real-map-server-mexico');
}

export default function CyntaraRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="cyntara-real-map-server-mexico" />;
}
