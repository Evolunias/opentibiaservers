import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-thornia-servers');
}

export default function CustomMapThorniaServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-thornia-servers" />;
}
