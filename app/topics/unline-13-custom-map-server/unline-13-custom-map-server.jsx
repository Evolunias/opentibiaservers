import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-13-custom-map-server');
}

export default function Unline13CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="unline-13-custom-map-server" />;
}
