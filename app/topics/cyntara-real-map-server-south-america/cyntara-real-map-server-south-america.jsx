import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-real-map-server-south-america');
}

export default function CyntaraRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-real-map-server-south-america" />;
}
