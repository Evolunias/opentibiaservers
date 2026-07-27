import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-7-1-custom-map-servers');
}

export default function Unline71CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="unline-7-1-custom-map-servers" />;
}
