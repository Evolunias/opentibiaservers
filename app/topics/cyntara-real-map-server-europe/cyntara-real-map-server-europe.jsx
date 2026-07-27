import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-real-map-server-europe');
}

export default function CyntaraRealMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="cyntara-real-map-server-europe" />;
}
