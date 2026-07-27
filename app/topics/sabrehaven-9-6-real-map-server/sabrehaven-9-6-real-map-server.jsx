import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-9-6-real-map-server');
}

export default function Sabrehaven96RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-9-6-real-map-server" />;
}
