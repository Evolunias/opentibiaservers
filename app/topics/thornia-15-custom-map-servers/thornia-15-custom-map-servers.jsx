import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-15-custom-map-servers');
}

export default function Thornia15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="thornia-15-custom-map-servers" />;
}
