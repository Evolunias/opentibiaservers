import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-8-1-custom-map-servers');
}

export default function Unline81CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="unline-8-1-custom-map-servers" />;
}
