import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-11-real-map-servers');
}

export default function Sabrehaven11RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-11-real-map-servers" />;
}
