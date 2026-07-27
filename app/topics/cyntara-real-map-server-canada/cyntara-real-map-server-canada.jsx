import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-real-map-server-canada');
}

export default function CyntaraRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-real-map-server-canada" />;
}
