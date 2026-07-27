import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-15-custom-map-servers');
}

export default function Unline15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="unline-15-custom-map-servers" />;
}
