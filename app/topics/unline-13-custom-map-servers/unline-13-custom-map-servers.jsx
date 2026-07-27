import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-13-custom-map-servers');
}

export default function Unline13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="unline-13-custom-map-servers" />;
}
