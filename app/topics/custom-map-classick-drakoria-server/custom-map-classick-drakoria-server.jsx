import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-classick-drakoria-server');
}

export default function CustomMapClassickDrakoriaServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-classick-drakoria-server" />;
}
