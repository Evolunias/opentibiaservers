import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-11-custom-map-servers');
}

export default function Thornia11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="thornia-11-custom-map-servers" />;
}
