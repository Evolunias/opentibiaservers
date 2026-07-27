import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-10-98-custom-map-servers');
}

export default function Luminera1098CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="luminera-10-98-custom-map-servers" />;
}
