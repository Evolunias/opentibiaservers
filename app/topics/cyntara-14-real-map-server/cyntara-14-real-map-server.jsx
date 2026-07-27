import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-14-real-map-server');
}

export default function Cyntara14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-14-real-map-server" />;
}
