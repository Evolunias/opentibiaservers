import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-12-custom-map-servers');
}

export default function Luminera12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="luminera-12-custom-map-servers" />;
}
