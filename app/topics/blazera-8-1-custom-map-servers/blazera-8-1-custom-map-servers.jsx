import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-1-custom-map-servers');
}

export default function Blazera81CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-1-custom-map-servers" />;
}
