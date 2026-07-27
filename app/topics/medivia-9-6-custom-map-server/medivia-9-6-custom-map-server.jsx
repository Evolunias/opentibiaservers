import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-9-6-custom-map-server');
}

export default function Medivia96CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-9-6-custom-map-server" />;
}
