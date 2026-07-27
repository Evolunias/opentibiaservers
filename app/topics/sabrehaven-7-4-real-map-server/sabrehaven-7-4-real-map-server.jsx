import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-4-real-map-server');
}

export default function Sabrehaven74RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-4-real-map-server" />;
}
