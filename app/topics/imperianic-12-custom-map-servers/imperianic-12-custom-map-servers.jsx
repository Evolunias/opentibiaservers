import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-12-custom-map-servers');
}

export default function Imperianic12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="imperianic-12-custom-map-servers" />;
}
