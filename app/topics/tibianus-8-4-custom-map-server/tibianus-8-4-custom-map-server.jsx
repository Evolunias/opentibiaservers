import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-4-custom-map-server');
}

export default function Tibianus84CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-4-custom-map-server" />;
}
