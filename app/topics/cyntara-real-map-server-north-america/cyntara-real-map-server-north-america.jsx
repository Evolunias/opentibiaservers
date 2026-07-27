import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-real-map-server-north-america');
}

export default function CyntaraRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-real-map-server-north-america" />;
}
