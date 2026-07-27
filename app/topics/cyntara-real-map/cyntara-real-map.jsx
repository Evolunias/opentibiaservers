import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-real-map');
}

export default function CyntaraRealMapKeywordPage() {
  return <StaticKeywordPage slug="cyntara-real-map" />;
}
