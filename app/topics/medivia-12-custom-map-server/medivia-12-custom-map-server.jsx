import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-12-custom-map-server');
}

export default function Medivia12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-12-custom-map-server" />;
}
