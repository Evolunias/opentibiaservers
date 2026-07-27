import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-13-real-map-server');
}

export default function Imperianic13RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-13-real-map-server" />;
}
