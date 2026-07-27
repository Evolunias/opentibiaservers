import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-7-1-custom-map-server');
}

export default function Unline71CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="unline-7-1-custom-map-server" />;
}
