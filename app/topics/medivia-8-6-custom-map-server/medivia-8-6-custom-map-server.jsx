import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-6-custom-map-server');
}

export default function Medivia86CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-6-custom-map-server" />;
}
