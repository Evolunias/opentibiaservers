import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-0-custom-map-servers');
}

export default function Sabrehaven80CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-0-custom-map-servers" />;
}
