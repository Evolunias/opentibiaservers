import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-thaisot-servers');
}

export default function CustomMapThaisotServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-thaisot-servers" />;
}
