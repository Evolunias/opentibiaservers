import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-6-custom-map-servers');
}

export default function Blazera76CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-6-custom-map-servers" />;
}
