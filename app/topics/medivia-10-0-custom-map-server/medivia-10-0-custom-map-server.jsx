import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-10-0-custom-map-server');
}

export default function Medivia100CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-10-0-custom-map-server" />;
}
