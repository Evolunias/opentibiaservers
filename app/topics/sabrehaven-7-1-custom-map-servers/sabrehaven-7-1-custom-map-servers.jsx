import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-1-custom-map-servers');
}

export default function Sabrehaven71CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-1-custom-map-servers" />;
}
