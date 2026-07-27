import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-real-map-servers-north-america');
}

export default function CyntaraRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-real-map-servers-north-america" />;
}
