import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-8-6-real-map-server');
}

export default function Imperianic86RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-8-6-real-map-server" />;
}
