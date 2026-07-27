import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-13-real-map-server');
}

export default function Sabrehaven13RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-13-real-map-server" />;
}
