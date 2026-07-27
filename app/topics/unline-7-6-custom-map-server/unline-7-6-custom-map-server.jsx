import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-7-6-custom-map-server');
}

export default function Unline76CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="unline-7-6-custom-map-server" />;
}
