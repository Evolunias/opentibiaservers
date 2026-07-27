import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-real-map-servers-canada');
}

export default function CyntaraRealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-real-map-servers-canada" />;
}
