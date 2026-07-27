import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-12-real-map-server');
}

export default function Cyntara12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-12-real-map-server" />;
}
