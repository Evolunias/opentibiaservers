import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-6-custom-map-servers');
}

export default function Sabrehaven76CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-6-custom-map-servers" />;
}
