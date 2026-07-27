import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-1-real-map-servers');
}

export default function Sabrehaven71RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-1-real-map-servers" />;
}
