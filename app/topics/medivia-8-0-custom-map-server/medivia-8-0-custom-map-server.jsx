import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-0-custom-map-server');
}

export default function Medivia80CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-0-custom-map-server" />;
}
