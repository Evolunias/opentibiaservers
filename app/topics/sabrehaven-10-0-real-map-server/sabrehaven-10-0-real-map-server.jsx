import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-10-0-real-map-server');
}

export default function Sabrehaven100RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-10-0-real-map-server" />;
}
