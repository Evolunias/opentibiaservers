import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-real-map-server-uk');
}

export default function CyntaraRealMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="cyntara-real-map-server-uk" />;
}
