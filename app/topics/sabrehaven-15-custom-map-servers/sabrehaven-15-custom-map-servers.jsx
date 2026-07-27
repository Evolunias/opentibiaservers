import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-15-custom-map-servers');
}

export default function Sabrehaven15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-15-custom-map-servers" />;
}
