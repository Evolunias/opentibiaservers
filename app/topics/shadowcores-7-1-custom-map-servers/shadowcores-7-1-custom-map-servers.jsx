import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-1-custom-map-servers');
}

export default function Shadowcores71CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-1-custom-map-servers" />;
}
