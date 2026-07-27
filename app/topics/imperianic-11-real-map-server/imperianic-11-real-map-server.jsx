import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-11-real-map-server');
}

export default function Imperianic11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-11-real-map-server" />;
}
