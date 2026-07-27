import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-alastera-servers');
}

export default function CustomMapAlasteraServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-alastera-servers" />;
}
