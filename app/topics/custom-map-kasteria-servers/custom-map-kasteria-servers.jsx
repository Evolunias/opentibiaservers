import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-kasteria-servers');
}

export default function CustomMapKasteriaServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-kasteria-servers" />;
}
