import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-1-real-map-server');
}

export default function Sabrehaven81RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-1-real-map-server" />;
}
