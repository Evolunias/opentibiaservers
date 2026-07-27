import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-1-real-map-servers');
}

export default function Sabrehaven81RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-1-real-map-servers" />;
}
