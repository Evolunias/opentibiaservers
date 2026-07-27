import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-9-6-real-map-server');
}

export default function Cyntara96RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-9-6-real-map-server" />;
}
