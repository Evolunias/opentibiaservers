import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-real-map-servers-south-america');
}

export default function CyntaraRealMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-real-map-servers-south-america" />;
}
