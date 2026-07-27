import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-7-4-custom-map-server');
}

export default function Medivia74CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-7-4-custom-map-server" />;
}
