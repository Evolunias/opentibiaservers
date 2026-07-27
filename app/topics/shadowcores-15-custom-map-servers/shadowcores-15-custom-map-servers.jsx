import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-15-custom-map-servers');
}

export default function Shadowcores15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-15-custom-map-servers" />;
}
