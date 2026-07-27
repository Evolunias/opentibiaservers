import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-8-6-custom-map-servers');
}

export default function Unline86CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="unline-8-6-custom-map-servers" />;
}
