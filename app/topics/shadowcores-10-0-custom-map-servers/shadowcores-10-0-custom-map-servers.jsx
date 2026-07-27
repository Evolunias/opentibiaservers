import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-10-0-custom-map-servers');
}

export default function Shadowcores100CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-10-0-custom-map-servers" />;
}
