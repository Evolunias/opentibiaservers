import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-9-6-custom-map-servers');
}

export default function Imperianic96CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="imperianic-9-6-custom-map-servers" />;
}
