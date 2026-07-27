import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-11-custom-map-servers');
}

export default function Unline11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="unline-11-custom-map-servers" />;
}
