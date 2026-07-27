import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-14-custom-map-servers');
}

export default function Thornia14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="thornia-14-custom-map-servers" />;
}
