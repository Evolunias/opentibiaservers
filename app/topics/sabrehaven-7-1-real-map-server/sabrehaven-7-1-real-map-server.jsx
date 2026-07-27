import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-1-real-map-server');
}

export default function Sabrehaven71RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-1-real-map-server" />;
}
