import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-8-4-real-map-server');
}

export default function Imperianic84RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-8-4-real-map-server" />;
}
