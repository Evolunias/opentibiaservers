import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-11-custom-map-servers');
}

export default function Sabrehaven11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-11-custom-map-servers" />;
}
