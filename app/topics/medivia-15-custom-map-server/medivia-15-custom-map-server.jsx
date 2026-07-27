import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-15-custom-map-server');
}

export default function Medivia15CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-15-custom-map-server" />;
}
