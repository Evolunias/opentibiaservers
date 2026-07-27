import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-0-custom-map-servers');
}

export default function Blazera80CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-0-custom-map-servers" />;
}
