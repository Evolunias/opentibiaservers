import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-10-0-custom-map-servers');
}

export default function Sabrehaven100CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-10-0-custom-map-servers" />;
}
