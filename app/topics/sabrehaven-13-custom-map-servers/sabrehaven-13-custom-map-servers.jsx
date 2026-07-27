import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-13-custom-map-servers');
}

export default function Sabrehaven13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-13-custom-map-servers" />;
}
