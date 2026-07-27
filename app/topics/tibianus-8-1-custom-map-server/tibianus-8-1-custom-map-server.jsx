import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-1-custom-map-server');
}

export default function Tibianus81CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-1-custom-map-server" />;
}
