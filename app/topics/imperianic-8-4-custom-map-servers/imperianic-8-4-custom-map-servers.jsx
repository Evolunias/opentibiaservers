import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-8-4-custom-map-servers');
}

export default function Imperianic84CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="imperianic-8-4-custom-map-servers" />;
}
