import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-11-custom-map-servers');
}

export default function Tibianus11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibianus-11-custom-map-servers" />;
}
