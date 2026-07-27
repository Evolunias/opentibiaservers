import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-12-real-map-server');
}

export default function Sabrehaven12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-12-real-map-server" />;
}
