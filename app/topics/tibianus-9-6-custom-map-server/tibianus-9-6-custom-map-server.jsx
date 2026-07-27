import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-9-6-custom-map-server');
}

export default function Tibianus96CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-9-6-custom-map-server" />;
}
