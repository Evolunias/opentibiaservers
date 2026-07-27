import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-11-custom-map-servers');
}

export default function Luminera11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="luminera-11-custom-map-servers" />;
}
