import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-imperianic-servers');
}

export default function CustomMapImperianicServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-imperianic-servers" />;
}
