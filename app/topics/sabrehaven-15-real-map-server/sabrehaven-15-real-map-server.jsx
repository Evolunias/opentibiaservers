import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-15-real-map-server');
}

export default function Sabrehaven15RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-15-real-map-server" />;
}
