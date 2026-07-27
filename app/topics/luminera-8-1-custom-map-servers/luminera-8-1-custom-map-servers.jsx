import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-1-custom-map-servers');
}

export default function Luminera81CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-1-custom-map-servers" />;
}
