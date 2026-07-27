import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-12-real-map-servers');
}

export default function Sabrehaven12RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-12-real-map-servers" />;
}
