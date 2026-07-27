import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-real-map-server-poland');
}

export default function CyntaraRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="cyntara-real-map-server-poland" />;
}
