import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-1-custom-map-servers');
}

export default function Blazera71CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-1-custom-map-servers" />;
}
