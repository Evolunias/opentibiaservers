import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-10-0-custom-map-servers');
}

export default function Imperianic100CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="imperianic-10-0-custom-map-servers" />;
}
