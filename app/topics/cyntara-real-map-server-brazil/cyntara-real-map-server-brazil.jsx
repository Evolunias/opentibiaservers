import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-real-map-server-brazil');
}

export default function CyntaraRealMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="cyntara-real-map-server-brazil" />;
}
