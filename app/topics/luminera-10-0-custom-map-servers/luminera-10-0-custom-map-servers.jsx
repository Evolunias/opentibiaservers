import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-10-0-custom-map-servers');
}

export default function Luminera100CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="luminera-10-0-custom-map-servers" />;
}
