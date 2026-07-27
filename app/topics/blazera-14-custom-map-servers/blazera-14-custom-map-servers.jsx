import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-14-custom-map-servers');
}

export default function Blazera14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="blazera-14-custom-map-servers" />;
}
