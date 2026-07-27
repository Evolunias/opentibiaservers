import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-7-6-custom-map-servers');
}

export default function Thornia76CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="thornia-7-6-custom-map-servers" />;
}
