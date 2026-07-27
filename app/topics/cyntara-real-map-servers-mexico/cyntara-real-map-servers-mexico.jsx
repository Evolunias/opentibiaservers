import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-real-map-servers-mexico');
}

export default function CyntaraRealMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="cyntara-real-map-servers-mexico" />;
}
