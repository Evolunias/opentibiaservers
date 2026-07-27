import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-12-real-map-server');
}

export default function Imperianic12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-12-real-map-server" />;
}
