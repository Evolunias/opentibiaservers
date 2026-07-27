import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-0-custom-map-servers');
}

export default function Luminera80CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-0-custom-map-servers" />;
}
