import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-10-0-real-map-server');
}

export default function Cyntara100RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-10-0-real-map-server" />;
}
