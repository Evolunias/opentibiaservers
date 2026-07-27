import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-real-map-server-germany');
}

export default function CyntaraRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="cyntara-real-map-server-germany" />;
}
