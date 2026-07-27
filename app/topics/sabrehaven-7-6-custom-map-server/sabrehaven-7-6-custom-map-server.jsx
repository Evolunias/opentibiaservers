import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-6-custom-map-server');
}

export default function Sabrehaven76CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-6-custom-map-server" />;
}
