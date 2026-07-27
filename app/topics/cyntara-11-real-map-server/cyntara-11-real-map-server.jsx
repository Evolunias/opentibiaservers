import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-11-real-map-server');
}

export default function Cyntara11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-11-real-map-server" />;
}
