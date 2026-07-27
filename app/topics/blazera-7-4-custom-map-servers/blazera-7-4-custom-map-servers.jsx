import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-4-custom-map-servers');
}

export default function Blazera74CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-4-custom-map-servers" />;
}
