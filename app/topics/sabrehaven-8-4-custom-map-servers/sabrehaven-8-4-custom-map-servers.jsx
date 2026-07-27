import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-4-custom-map-servers');
}

export default function Sabrehaven84CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-4-custom-map-servers" />;
}
