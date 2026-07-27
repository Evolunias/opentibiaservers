import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-14-custom-map-servers');
}

export default function Unline14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="unline-14-custom-map-servers" />;
}
