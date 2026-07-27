import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-real-map-server-argentina');
}

export default function CyntaraRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-real-map-server-argentina" />;
}
