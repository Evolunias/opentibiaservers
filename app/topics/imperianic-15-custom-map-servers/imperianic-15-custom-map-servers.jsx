import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-15-custom-map-servers');
}

export default function Imperianic15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="imperianic-15-custom-map-servers" />;
}
