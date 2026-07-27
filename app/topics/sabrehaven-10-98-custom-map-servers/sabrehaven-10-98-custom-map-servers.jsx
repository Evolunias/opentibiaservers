import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-10-98-custom-map-servers');
}

export default function Sabrehaven1098CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-10-98-custom-map-servers" />;
}
