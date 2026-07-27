import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-9-6-custom-map-server');
}

export default function Unline96CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="unline-9-6-custom-map-server" />;
}
