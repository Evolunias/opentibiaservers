import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-54-custom-map-servers');
}

export default function Tibianus854CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-54-custom-map-servers" />;
}
