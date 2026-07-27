import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-11-custom-map-servers');
}

export default function Imperianic11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="imperianic-11-custom-map-servers" />;
}
