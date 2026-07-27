import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-4-real-map-server');
}

export default function Cyntara84RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-4-real-map-server" />;
}
