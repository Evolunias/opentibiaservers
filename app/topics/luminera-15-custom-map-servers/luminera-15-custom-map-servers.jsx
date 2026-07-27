import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-15-custom-map-servers');
}

export default function Luminera15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="luminera-15-custom-map-servers" />;
}
