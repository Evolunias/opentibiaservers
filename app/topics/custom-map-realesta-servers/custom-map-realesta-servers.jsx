import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-realesta-servers');
}

export default function CustomMapRealestaServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-realesta-servers" />;
}
