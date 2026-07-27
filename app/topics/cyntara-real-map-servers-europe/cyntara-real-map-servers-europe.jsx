import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-real-map-servers-europe');
}

export default function CyntaraRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="cyntara-real-map-servers-europe" />;
}
