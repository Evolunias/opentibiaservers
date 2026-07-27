import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-1-custom-map-servers');
}

export default function Sabrehaven81CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-1-custom-map-servers" />;
}
