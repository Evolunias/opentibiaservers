import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-10-0-real-map-servers');
}

export default function Sabrehaven100RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-10-0-real-map-servers" />;
}
