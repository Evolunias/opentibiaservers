import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-6-real-map-server');
}

export default function Sabrehaven76RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-6-real-map-server" />;
}
