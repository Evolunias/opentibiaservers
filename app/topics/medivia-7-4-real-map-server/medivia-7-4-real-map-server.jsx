import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-7-4-real-map-server');
}

export default function Medivia74RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-7-4-real-map-server" />;
}
