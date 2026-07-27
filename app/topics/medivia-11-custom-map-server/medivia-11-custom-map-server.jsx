import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-11-custom-map-server');
}

export default function Medivia11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-11-custom-map-server" />;
}
