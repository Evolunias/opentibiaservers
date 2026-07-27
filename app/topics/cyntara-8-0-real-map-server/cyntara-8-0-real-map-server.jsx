import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-0-real-map-server');
}

export default function Cyntara80RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-0-real-map-server" />;
}
