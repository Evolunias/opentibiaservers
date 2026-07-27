import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-6-custom-map-servers');
}

export default function Sabrehaven86CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-6-custom-map-servers" />;
}
