import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-72-custom-map-servers');
}

export default function Sabrehaven772CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-72-custom-map-servers" />;
}
