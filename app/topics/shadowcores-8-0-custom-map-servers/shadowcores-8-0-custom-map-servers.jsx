import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-0-custom-map-servers');
}

export default function Shadowcores80CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-0-custom-map-servers" />;
}
