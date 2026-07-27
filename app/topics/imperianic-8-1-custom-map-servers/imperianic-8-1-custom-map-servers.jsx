import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-8-1-custom-map-servers');
}

export default function Imperianic81CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="imperianic-8-1-custom-map-servers" />;
}
