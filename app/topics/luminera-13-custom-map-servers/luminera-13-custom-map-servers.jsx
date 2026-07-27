import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-13-custom-map-servers');
}

export default function Luminera13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="luminera-13-custom-map-servers" />;
}
