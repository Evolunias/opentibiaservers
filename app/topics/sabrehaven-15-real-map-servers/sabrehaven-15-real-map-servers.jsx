import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-15-real-map-servers');
}

export default function Sabrehaven15RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-15-real-map-servers" />;
}
