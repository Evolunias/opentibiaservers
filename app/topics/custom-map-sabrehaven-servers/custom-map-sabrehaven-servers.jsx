import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-sabrehaven-servers');
}

export default function CustomMapSabrehavenServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-sabrehaven-servers" />;
}
