import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-12-custom-map-servers');
}

export default function Thornia12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="thornia-12-custom-map-servers" />;
}
