import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-9-6-custom-map-servers');
}

export default function Blazera96CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="blazera-9-6-custom-map-servers" />;
}
