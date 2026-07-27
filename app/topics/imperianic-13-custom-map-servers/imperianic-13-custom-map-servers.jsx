import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-13-custom-map-servers');
}

export default function Imperianic13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="imperianic-13-custom-map-servers" />;
}
