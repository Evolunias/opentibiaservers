import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-7-1-custom-map-servers');
}

export default function Imperianic71CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="imperianic-7-1-custom-map-servers" />;
}
