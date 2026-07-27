import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-classick-drakoria-servers');
}

export default function CustomMapClassickDrakoriaServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-classick-drakoria-servers" />;
}
