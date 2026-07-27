import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-14-custom-map-servers');
}

export default function Sabrehaven14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-14-custom-map-servers" />;
}
