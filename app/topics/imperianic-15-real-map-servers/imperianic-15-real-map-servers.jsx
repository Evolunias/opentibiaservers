import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-15-real-map-servers');
}

export default function Imperianic15RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="imperianic-15-real-map-servers" />;
}
