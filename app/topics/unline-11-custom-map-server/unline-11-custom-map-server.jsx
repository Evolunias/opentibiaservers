import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-11-custom-map-server');
}

export default function Unline11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="unline-11-custom-map-server" />;
}
