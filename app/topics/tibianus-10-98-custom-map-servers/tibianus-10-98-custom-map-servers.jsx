import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-10-98-custom-map-servers');
}

export default function Tibianus1098CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibianus-10-98-custom-map-servers" />;
}
