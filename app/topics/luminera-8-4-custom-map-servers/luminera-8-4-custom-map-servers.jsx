import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-4-custom-map-servers');
}

export default function Luminera84CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-4-custom-map-servers" />;
}
