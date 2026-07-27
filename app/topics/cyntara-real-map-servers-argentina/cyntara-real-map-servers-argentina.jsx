import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-real-map-servers-argentina');
}

export default function CyntaraRealMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-real-map-servers-argentina" />;
}
