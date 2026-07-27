import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-13-real-map-server');
}

export default function Cyntara13RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-13-real-map-server" />;
}
