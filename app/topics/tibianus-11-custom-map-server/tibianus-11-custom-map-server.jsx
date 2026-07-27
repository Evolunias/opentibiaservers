import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-11-custom-map-server');
}

export default function Tibianus11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-11-custom-map-server" />;
}
