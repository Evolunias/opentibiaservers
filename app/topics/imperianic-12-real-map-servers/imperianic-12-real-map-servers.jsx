import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-12-real-map-servers');
}

export default function Imperianic12RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="imperianic-12-real-map-servers" />;
}
