import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-11-real-map-server');
}

export default function Sabrehaven11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-11-real-map-server" />;
}
