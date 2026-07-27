import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-15-custom-map-servers');
}

export default function Blazera15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="blazera-15-custom-map-servers" />;
}
