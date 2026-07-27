import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-11-custom-map-servers');
}

export default function Blazera11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="blazera-11-custom-map-servers" />;
}
