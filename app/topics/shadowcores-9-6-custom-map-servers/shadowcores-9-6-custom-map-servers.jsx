import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-9-6-custom-map-servers');
}

export default function Shadowcores96CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-9-6-custom-map-servers" />;
}
