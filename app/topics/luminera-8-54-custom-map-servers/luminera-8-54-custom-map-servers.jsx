import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-54-custom-map-servers');
}

export default function Luminera854CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-54-custom-map-servers" />;
}
