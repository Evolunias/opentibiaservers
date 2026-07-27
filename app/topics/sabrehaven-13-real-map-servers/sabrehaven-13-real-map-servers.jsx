import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-13-real-map-servers');
}

export default function Sabrehaven13RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-13-real-map-servers" />;
}
