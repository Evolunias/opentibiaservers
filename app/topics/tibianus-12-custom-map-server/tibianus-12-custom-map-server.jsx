import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-12-custom-map-server');
}

export default function Tibianus12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-12-custom-map-server" />;
}
