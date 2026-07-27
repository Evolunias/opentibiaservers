import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-7-4-custom-map-servers');
}

export default function Imperianic74CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="imperianic-7-4-custom-map-servers" />;
}
