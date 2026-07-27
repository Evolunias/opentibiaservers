import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-1-custom-map-servers');
}

export default function Luminera71CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-1-custom-map-servers" />;
}
