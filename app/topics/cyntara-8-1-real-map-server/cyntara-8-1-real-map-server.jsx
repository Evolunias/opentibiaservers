import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-1-real-map-server');
}

export default function Cyntara81RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-1-real-map-server" />;
}
