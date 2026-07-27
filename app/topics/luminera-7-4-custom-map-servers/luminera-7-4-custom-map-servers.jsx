import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-4-custom-map-servers');
}

export default function Luminera74CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-4-custom-map-servers" />;
}
