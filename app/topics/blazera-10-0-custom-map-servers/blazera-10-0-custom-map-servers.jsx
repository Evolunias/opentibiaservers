import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-10-0-custom-map-servers');
}

export default function Blazera100CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="blazera-10-0-custom-map-servers" />;
}
