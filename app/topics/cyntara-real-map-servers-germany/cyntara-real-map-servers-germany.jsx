import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-real-map-servers-germany');
}

export default function CyntaraRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="cyntara-real-map-servers-germany" />;
}
