import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-10-98-custom-map-server');
}

export default function Tibianus1098CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-10-98-custom-map-server" />;
}
