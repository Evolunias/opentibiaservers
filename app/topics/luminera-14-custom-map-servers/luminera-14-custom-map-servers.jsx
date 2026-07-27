import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-14-custom-map-servers');
}

export default function Luminera14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="luminera-14-custom-map-servers" />;
}
